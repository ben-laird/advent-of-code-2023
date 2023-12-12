fn main() {
    println!("From Part 1: hello world!");
}

#[cfg(test)]
mod tests {
    #[test]
    fn sanity() {
        let res = 2 + 2;
        assert_eq!(res, 4);
    }
}
