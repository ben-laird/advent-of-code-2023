function main() {
  const message = "From Part 1: hello world!";

  const res = solution(message);

  console.debug(res);
}

function solution(input: string): string {
  return input;
}

if (import.meta.main) {
  main();
}

Deno.test("Part 1", async (t) => {
  const { assertEquals } = await import(
    "https://deno.land/std@0.208.0/assert/mod.ts"
  );

  await t.step({
    name: "sanity",
    fn() {
      const res = 2 + 2;
      assertEquals(res, 4);
    },
  });

  await t.step({
    name: "solution",
    fn() {
      const res = solution("Hello world!");
      assertEquals(res, "Hello world!");
    },
  });
});
