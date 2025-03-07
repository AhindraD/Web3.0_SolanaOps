use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct UserAccount {
    username: String,
    profile: String,
}

fn main() {
    let user_acc1 = UserAccount {
        username: String::from("knite"),
        profile: String::from("x.com/knite"),
    };
}
