import {BigInt, dataSource} from "@graphprotocol/graph-ts";
import {BuyCoverEvent} from "./IDistributor";
import {BuyCoverEvent as EventEntity} from "./entities/BuyCoverEvent.entity";
import {CoverBought as CoverBoughtEvent} from "./INexusDistributorV1";

export function handleCoverBought (event: CoverBoughtEvent): void {
    let entity = new EventEntity(event.transaction.from.toHex());


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

    entity.save()
}

export function handleBuyCoverEvent(event: BuyCoverEvent): void {
    let entity = new EventEntity(event.transaction.from.toHex())

    entity.buyer = event.params._productAddress;
    entity.coverId = event.params._productId;
    entity.expiry = event.params._period;
    entity.contractAddress = event.params._asset;
    entity.amount = event.params._amount;
    entity.price = event.params._price;
    entity.network = dataSource.network();
    entity.distributor = dataSource.address();
    entity.timestamp = event.block.timestamp;
    entity.blockNumber = event.block.number;

    entity.save()
}