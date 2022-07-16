import {CoverBought as CoverBoughtEvent} from '../../generated/nexus_distributor/nexus_distributor';
import {CoverBought} from "../entities/CoverBought.entity";

export function handleCoverBought(event: CoverBoughtEvent): void {
    let entity = new CoverBought(
        event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )

    // BigInt and BigDecimal math are supported
    entity.id = event.transaction.hash.toHex() + event.transaction.nonce.toString()
    entity.timestamp = event.block.timestamp
    entity.coverId = event.params.coverId
    entity.buyer = event.params.buyer
    entity.contractAddress = event.params.contractAddress
    entity.feePercentage = event.params.feePercentage
    entity.coverPrice = event.params.coverPrice

    // Entities can be written to the store with `.save()`
    entity.save()
}