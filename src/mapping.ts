import {BigInt, Bytes, dataSource} from "@graphprotocol/graph-ts";
import {BuyCoverEvent} from "./IDistributor";
import {BuyCoverEvent as EventEntity} from "./entities/BuyCoverEvent.entity";
import {CoverBought as CoverBoughtEvent} from "./INexusDistributorV1";

export function handleCoverBought (event: CoverBoughtEvent): void {
    let entity = new EventEntity(event.transaction.hash.toHex() + "-" + event.logIndex.toString());


    entity.buyer = event.params.buyer;
    entity.coverId = event.params.coverId;
    entity.expiry = BigInt.zero();
    entity.contractAddress = event.params.contractAddress;
    entity.amount = event.params.feePercentage;
    entity.price = event.params.coverPrice;
    entity.network = dataSource.network();
    entity.distributor = dataSource.address();
    entity.timestamp = event.block.timestamp;
    entity.blockNumber = event.block.number;
    entity.transactionHash = event.transaction.hash;
    entity.asset = Bytes.empty();

    entity.save()
}

export function handleBuyCoverEvent(event: BuyCoverEvent): void {
    let entity = new EventEntity(event.transaction.hash.toHex() + "-" + event.logIndex.toString())

    entity.buyer = event.transaction.from;
    entity.coverId = event.params._productId;
    entity.expiry = event.params._period;
    entity.contractAddress = event.params._productAddress;
    entity.amount = event.params._amount;
    entity.price = event.params._price;
    entity.network = dataSource.network();
    entity.distributor = dataSource.address();
    entity.timestamp = event.block.timestamp;
    entity.blockNumber = event.block.number;
    entity.transactionHash = event.transaction.hash;
    entity.asset = event.params._asset;

    entity.save()
}