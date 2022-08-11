// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
    Entity,
    Value,
    ValueKind,
    store,
    Bytes,
    BigInt
} from "@graphprotocol/graph-ts";

export class BuyCoverEvent extends Entity {
    constructor(id: string) {
        super();
        this.set("id", Value.fromString(id));
        this.set("buyer", Value.fromBytes(Bytes.empty()));
        this.set("coverId", Value.fromBigInt(BigInt.zero()));
        this.set("expiry", Value.fromBigInt(BigInt.zero()));
        this.set("contractAddress", Value.fromBytes(Bytes.empty()));
        this.set("amount", Value.fromBigInt(BigInt.zero()));
        this.set("price", Value.fromBigInt(BigInt.zero()));
        this.set("network", Value.fromBytes(Bytes.empty()));
        this.set("distributor", Value.fromBytes(Bytes.empty()));
        this.set("timestamp", Value.fromBigInt(BigInt.zero()));
        this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
        this.set("transactionHash", Value.fromBytes(Bytes.empty()));
        this.set("asset", Value.fromBytes(Bytes.empty()));
    }

    save(): void {
        let id = this.get("id");
        assert(id != null, "Cannot save BuyCoverEvent entity without an ID");
        if (id) {
            assert(
                id.kind == ValueKind.STRING,
                "Cannot save BuyCoverEvent entity with non-string ID. " +
                'Considering using .toHex() to convert the "id" to a string.'
            );
            store.set("BuyCoverEvent", id.toString(), this);
        }
    }

    static load(id: string): BuyCoverEvent | null {
        return changetype<BuyCoverEvent | null>(store.get("BuyCoverEvent", id));
    }

    get id(): string {
        let value = this.get("id");
        return value!.toString();
    }

    set id(value: string) {
        this.set("id", Value.fromString(value));
    }

    get buyer(): Bytes {
        let value = this.get("buyer");
        return value!.toBytes();
    }

    set buyer(value: Bytes) {
        this.set("buyer", Value.fromBytes(value));
    }

    get coverId(): BigInt {
        let value = this.get("coverId");
        return value!.toBigInt();
    }

    set coverId(value: BigInt) {
        this.set("coverId", Value.fromBigInt(value));
    }

    get expiry(): BigInt {
        let value = this.get("expiry");
        return value!.toBigInt();
    }

    set expiry(value: BigInt) {
        this.set("expiry", Value.fromBigInt(value));
    }

    get contractAddress(): Bytes {
        let value = this.get("contractAddress");
        return value!.toBytes();
    }

    set contractAddress(value: Bytes) {
        this.set("contractAddress", Value.fromBytes(value));
    }

    get amount(): BigInt {
        let value = this.get("amount");
        return value!.toBigInt();
    }

    set amount(value: BigInt) {
        this.set("amount", Value.fromBigInt(value));
    }

    get price(): BigInt {
        let value = this.get("price");
        return value!.toBigInt();
    }

    set price(value: BigInt) {
        this.set("price", Value.fromBigInt(value));
    }

    get network(): string {
        let value = this.get("network");
        return value!.toString();
    }

    set network(value: string) {
        this.set("network", Value.fromString(value));
    }

    get distributor(): Bytes {
        let value = this.get("distributor");
        return value!.toBytes();
    }

    set distributor(value: Bytes) {
        this.set("distributor", Value.fromBytes(value));
    }

    get transactionHash(): Bytes {
        let value = this.get("transactionHash");
        return value!.toBytes();
    }

    set transactionHash(value: Bytes) {
        this.set("transactionHash", Value.fromBytes(value));
    }

    get asset(): Bytes {
        let value = this.get("asset");
        return value!.toBytes();
    }

    set asset(value: Bytes) {
        this.set("asset", Value.fromBytes(value));
    }

    get timestamp(): BigInt {
        let value = this.get("timestamp");
        return  value!.toBigInt();
    }

    set timestamp(value: BigInt) {
        this.set("timestamp",  Value.fromBigInt(value));
    }

    get blockNumber(): BigInt {
        let value = this.get("blockNumber");
        return  value!.toBigInt();
    }

    set blockNumber(value: BigInt) {
        this.set("blockNumber",  Value.fromBigInt(value));
    }
}
