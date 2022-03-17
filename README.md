# BrightUnion Distributors protocol - Coverage sales graphs

The Graph protocol implementation of the Bright Union [risk coverage](https://app.brightunion.io/coverages) sales.
## Subgraphs ##

1.- Insurace
 - Mainnet (Coming soon)

 - Polygon (Matic)
    - Contract Address: [0x371BdDD1321D24C130d79Ec85f125dd34928B054](https://polygonscan.com/address/0x371BdDD1321D24C130d79Ec85f125dd34928B054)
    - Implementation: [0x378cb791eBE3a93075B1dFC843C1552bE3a7A884](https://polygonscan.com/address/0x378cb791ebe3a93075b1dfc843c1552be3a7a884) 
    - Explorer: [GraphiQL](https://api.thegraph.com/subgraphs/id/QmNVNujYYKTyBrCmBJ5RH14TnXatWbmrrg3get8deDDFH2/graphql)
    - Indexing start date: Nov-18-2021 10:19:51 AM +UTC (21512217)
 - Avalanche
    - Contract Address: [0x375d9567b483814d1275869b543101b725779b67](https://snowtrace.io/address/0x375d9567b483814d1275869b543101b725779b67#code)
    - Impl: [0x8517BDa0ff2553b7e574769e141bcf2652E5CC1b](https://snowtrace.io/address/0x8517BDa0ff2553b7e574769e141bcf2652E5CC1b#code)
    - Explorer: [GraphiQL](https://api.thegraph.com/subgraphs/name/danielifg/brightprotocolavalanche)
   - Indexing start date: Mar-10-2022 07:25:23 PM +UTC (11943843)

 - BSC
    - Contract Address: [0x68f4c3a5ac3ea721c67fc1061e02d39fb55e9fa9](https://bscscan.com/address/0x68f4c3a5ac3ea721c67fc1061e02d39fb55e9fa9)
    - Implementation : [0x831DadaA0e6cDc250CBcd76bAe6e441a46423B94](https://bscscan.com/address/0x831dadaa0e6cdc250cbcd76bae6e441a46423b94)
    - Explorer: [GraphiQL](https://api.thegraph.com/subgraphs/name/danielifg/brightprotocolbsc)
    - Indexing start date: Nov-18-2021 02:42:12 PM +UTC (12753267)


2.- Bridge Mutual (Coming soon)

3.-  Nexus Mutual

 - Ethereum (Mainnet)
    - Contract Address: [0x3756c3c9374f38e0d9aacb637fed1641504a5b28](https://etherscan.io/address/0x3756c3c9374f38e0d9aacb637fed1641504a5b28)
    - Impl: [0x22D198bE7ab10F31e6d2825c719f1b52534fd56e](https://etherscan.io/address/0x22d198be7ab10f31e6d2825c719f1b52534fd56e#code)
    - Explorer: [GraphiQL]()

## Create subgraph from verified contract
```console
graph init \
  --product hosted-service
  --from-contract <CONTRACT_ADDRESS> \
  <GITHUB_USER>/<SUBGRAPH_NAME> [<DIRECTORY>]
```
## Update Subgraph ##

### Requirements ###
- ``npm install -g @graphprotocol/graph-cli``
- ``graph auth --product hosted-service <ACCESS_TOKEN> ``

### Build project ###
- ``graph build``
- ``graph deploy --product hosted-service brightunion/<subgraph name> ``
