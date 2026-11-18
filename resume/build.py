# Builds public/resume.pdf from resume/resume.html with headless Chromium. Run from the portfolio folder.
import asyncio, pathlib
from playwright.async_api import async_playwright

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE.parent / "public" / "resume.pdf"

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page()
        await pg.goto(HERE.joinpath("resume.html").as_uri(), wait_until="load")
        await pg.pdf(path=str(OUT), format="Letter", print_background=True, margin={"top": "0", "right": "0", "bottom": "0", "left": "0"})
        pages = await pg.evaluate("Math.ceil(document.querySelector('.page').scrollHeight / (11 * 96))")
        await b.close()
    print("saved", OUT, "| pages (approx):", pages)

asyncio.run(main())
