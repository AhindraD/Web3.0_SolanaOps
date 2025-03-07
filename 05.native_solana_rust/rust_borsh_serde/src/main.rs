use borsh::{BorshDeserialize, BorshSerialize};

#[derive(BorshSerialize, BorshDeserialize, Debug, PartialEq)]
pub struct AccountData {
    id: u64,
    content: String,
    v0: Vec<u32>,
}

fn main() {
    let original_data = AccountData {
        id: 999u64,
        content: String::from("x.com/knite"),
        v0: vec![3, 5, 7, 9],
    };

    //SERIALIZE
    let mut buffer: Vec<u8> = Vec::new();
    // binary representation of original_data into buffer
    original_data.serialize(&mut buffer).unwrap();
    //NOW - buffer contains a compact, machine-readable format of MyStruct.
    println!("serialized to buffer: {:?}", buffer);

    //DE-SERIALIZE
    let deserialized_data = AccountData::try_from_slice(&buffer).unwrap();
    println!("Deserialized from buffer: {:?}", deserialized_data);

    assert_eq!(original_data, deserialized_data);
}
