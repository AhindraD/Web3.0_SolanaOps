use serde::{Deserialize, Serialize};
use serde_json::{from_str, to_string};

#[derive(Serialize, Deserialize, Debug)]
pub struct UserAccount {
    username: String,
    profile: String,
}

fn _main() {
    let user_acc1 = UserAccount {
        username: String::from("knite"),
        profile: String::from("x.com/knite"),
    };

    //Seraialize to JSON
    let serialized_json_str = to_string(&user_acc1).unwrap();
    println!("{:?}", serialized_json_str);

    //DE-Serialize to Struct
    let deser_user_struct: UserAccount = from_str(&serialized_json_str).unwrap();
    println!("{:?}", deser_user_struct);
}
