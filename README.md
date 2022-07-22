# Bright Union TheGraph schemas

## Installation

Clone the project

```bash
  git clone git@github.com:Bright-Union/brightprotocol-graph.git
```

Go to the project directory

```bash
  cd brightprotocol-graph
```

Install dependencies

```bash
  npm install
```

## Run Locally

**Requirements**: Docker, Node 14+

Start the local dev server

```bash
  docker-compose up
```

## Usage

Entity Mapper Schema Subgraph

### Listen to new events

1. Create new type in `schema.graphql`

   Example:

```graphql
type CoverBought @entity {
    id: ID!
    coverId: BigInt!
    buyer: Bytes! # address
    contractAddress: Bytes! # address
    feePercentage: BigInt!
    coverPrice: BigInt!
    network: String!
    distributor: Bytes!
}
```

2. Update subgraph datasource entities with new type

   Example:

```yaml
      entities:
        - CoverBought
```

3. Update subgraph datasource event Handlers with new type

   Example:

```yaml

eventHandlers:
  - event: CoverBought(indexed uint256,indexed address,indexed
      address,uint256,uint256)
    handler: handleCoverBought
```

4. Generate entities with cli

Run `graph codegen` to generate entities and event handlers

6. Copy or reuse generated entity from `generated` folder.

Generated entities might be missing some fields, so you might need to add them.

It is recommended to copy the entity from `generated` folder to `src/entities` folder and update the field.

Use `src/entities/CoverBought.entity.ts` as an example.

7. Define mappings for entity field.

Example:
`src/mappings.ts`

```typescript
  export function handleCoverBought(event: CoverBoughtEvent): void {
    let entity = new CoverBought(event.params.coverId.toHexString());

    entity.id = event.params.coverId.toHexString()
    entity.timestamp = event.block.timestamp
    entity.coverId = event.params.coverId
    entity.buyer = event.params.buyer
    entity.contractAddress = event.params.contractAddress
    entity.feePercentage = event.params.feePercentage
    entity.coverPrice = event.params.coverPrice
    entity.network = dataSource.network()
    entity.distributor = dataSource.address()

    entity.save()
}
```

8. Build and test with `npm run deploy-local`

## Build the graph from networks

Current implementation is using Mustache CLI to generate `subgraph.yaml` file from `subgraph.template.yaml` file.

So you can add new contract in `netwroks.json` file.

```json
{
  "mainnet": [
    {
      "name": "nexus_distributor",
      "address": "0x3756c3c9374f38e0d9aacb637fed1641504a5b28",
      "startBlock": 13212759
    }
  ]
}
```

To build template run `npm run prep-subgraph`, which runs `mustache networks.json subgraph.template.yaml > subgraph.yaml`

Deploy using `graph deploy --studio bu-distributors-mainnet`

### Building for networks other than Ethereum Mainnet

replace *mainnet* keywords in `subgraph.template.yaml` file with new the network name that matches network listed in `networks.json`.
```yaml
  {{#mainnet}}
  - kind: ethereum
    name: {{name}}
    network: mainnet
    source:
      address: "{{address}}"
      abi: IDistributor
      startBlock: {{startBlock}}
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.5
      language: wasm/assemblyscript
      entities:
        - CoverBought
      abis:
        - name: IDistributor
          file: ./abis/IDistributor.json
      eventHandlers:
        - event: CoverBought(indexed uint256,indexed address,indexed
            address,uint256,uint256)
          handler: handleCoverBought
      file: ./src/mapping.ts
    {{/mainnet}}
```