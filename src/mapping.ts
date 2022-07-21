import {dataSource} from "@graphprotocol/graph-ts";
import {CoverBought as CoverBoughtEvent} from "./IDistributor";
import {CoverBought} from "./entities/CoverBought.entity";

export function handleCoverBought (event: CoverBoughtEvent): void {
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