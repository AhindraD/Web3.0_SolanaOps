use std::f32::consts::PI;

enum Shape {
    Circle(f32),
    Square(f32),
    Rect(f32, f32),
}

pub fn main() {
    let shape_cir = Shape::Circle(13.3);
    let shape_sq = Shape::Square(9.0);
    let shape_rect = Shape::Rect(3.0, 5.0);

    println!("Circle area: {}", cal_area(shape_cir));
    println!("Square area: {}", cal_area(shape_sq));
    println!("Rect area: {}", cal_area(shape_rect));
}
fn cal_area(s: Shape) -> f32 {
    match s {
        Shape::Circle(r) => PI * r * 2.0,
        Shape::Square(a) => a * a,
        Shape::Rect(x, y) => x * y,
    }
}
