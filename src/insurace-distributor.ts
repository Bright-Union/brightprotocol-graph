import {
  insurace_distributorAdminChanged as insurace_distributorAdminChangedEvent,
  insurace_distributorBeaconUpgraded as insurace_distributorBeaconUpgradedEvent,
  insurace_distributorUpgraded as insurace_distributorUpgradedEvent
} from "../generated/insurace_distributor/insurace_distributor"
import {
  insurace_distributorAdminChanged,
  insurace_distributorBeaconUpgraded,
  insurace_distributorUpgraded
} from "../generated/schema"

export function handleinsurace_distributorAdminChanged(
  event: insurace_distributorAdminChangedEvent
): void {
  let entity = new insurace_distributorAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleinsurace_distributorBeaconUpgraded(
  event: insurace_distributorBeaconUpgradedEvent
): void {
  let entity = new insurace_distributorBeaconUpgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.beacon = event.params.beacon
  entity.save()
}

export function handleinsurace_distributorUpgraded(
  event: insurace_distributorUpgradedEvent
): void {
  let entity = new insurace_distributorUpgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.implementation = event.params.implementation
  entity.save()
}
