use serde::{Deserialize, Serialize};
use serde_yaml::{from_str, to_string};


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

    let ser_yaml_str = to_string(&user_acc1).unwrap();
    println!("{}", ser_yaml_str);

    let deser_user_struct: UserAccount = from_str(&ser_yaml_str).unwrap();
    println!("{:?}", deser_user_struct);
}