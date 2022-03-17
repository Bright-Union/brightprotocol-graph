import { BigInt } from "@graphprotocol/graph-ts"
import {
  Distributor,
  Approval,
  ApprovalForAll,
  ClaimPayoutRedeemed,
  ClaimSubmitted,
  CoverBought as CoverBoughtEvent,
  OwnershipTransferred,
  Transfer
} from "../generated/Distributor/Distributor"
import { CoverBought } from "../generated/schema"

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

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DEFAULT_BASE_URI(...)
  // - contract.ETH(...)
  // - contract.balanceOf(...)
  // - contract.baseURI(...)
  // - contract.buysAllowed(...)
  // - contract.claimTokens(...)
  // - contract.feePercentage(...)
  // - contract.gateway(...)
  // - contract.getApproved(...)
  // - contract.getCover(...)
  // - contract.getPayoutOutcome(...)
  // - contract.isApprovedForAll(...)
  // - contract.master(...)
  // - contract.name(...)
  // - contract.nxmToken(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.submitClaim(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
  // - contract.treasury(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleClaimPayoutRedeemed(event: ClaimPayoutRedeemed): void {}

export function handleClaimSubmitted(event: ClaimSubmitted): void {}

export function handleCoverBought(event: CoverBought): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {}
