import {CoverBought as CoverBoughtEvent} from "../../archive/nexus/generated/Distributor/Distributor";
import {CoverBought} from "../../archive/nexus/generated/schema";

export function handleApproval(event: CoverBoughtEvent): void {
    // Entities can be loaded from the store using a string ID; this ID
    // needs to be unique across all entities of the same type
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