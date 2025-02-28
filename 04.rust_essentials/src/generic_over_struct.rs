struct Rect<T> {
    height: T,
    width: T,
}

impl<T: std::ops::Mul<Output = T>> Rect<T> {
    pub fn area(self) -> T {
        self.height * self.width
    }
}

fn main() {
    let r1 = Rect {
        height: 3,
        width: 5,
    };
    let r2 = Rect {
        height: 3.0,
        width: 7.0,
    };

    println!("Area: {}", r1.area());
    println!("Area: {}", r2.area());
}
