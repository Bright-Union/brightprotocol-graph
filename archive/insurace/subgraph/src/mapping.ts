import { BigInt } from "@graphprotocol/graph-ts"
import {
  InsuraceDistributor,
  BuyCoverEvent as event,
  OwnershipTransferred
} from "../generated/InsuraceDistributor/InsuraceDistributor"
import { BuyCoverEvent } from "../generated/schema"

export function handleBuyCoverEvent(event: event): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = new BuyCoverEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )


  // Entity fields can be set based on event parameters
  entity._productAddress = event.params._productAddress
  entity._productId = event.params._productId
  entity._period = event.params._period
  entity._asset = event.params. _asset
  entity._amount = event.params._amount
  entity._price = event.params. _price


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
  // - contract.coverData(...)
  // - contract.getAllowance(...)
  // - contract.getCover(...)
  // - contract.getCoverCount(...)
  // - contract.getQuote(...)
  // - contract.masterCover(...)
  // - contract.owner(...)
  // - contract.product(...)
  // - contract.supportsInterface(...)
  /**
   * type BuyCoverEvent @entity {
              id: ID!
              _productAddress : Bytes!
              _productId : BigInt!
              _period: BigInt!
              _asset: Bytes!
              _amount: BigInt!
              _price: BigInt!
            }   
   */
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
