from pathlib import Path
from PIL import Image, ImageOps


SOURCE_DIR = Path("public/portfolio")
OUTPUT_DIR = Path("public/portfolio-optimized")

VARIANTS = {
    "thumb": {"max_width": 720, "quality": 74},
    "gallery": {"max_width": 1800, "quality": 82},
}


def open_first_frame(path: Path) -> Image.Image:
    image = Image.open(path)
    if getattr(image, "is_animated", False):
        image.seek(0)
    image = ImageOps.exif_transpose(image).convert("RGBA")
    background = Image.new("RGBA", image.size, (255, 255, 255, 255))
    background.alpha_composite(image)
    return background.convert("RGB")


def resize_to_width(image: Image.Image, max_width: int) -> Image.Image:
    if image.width <= max_width:
        return image.copy()
    ratio = max_width / image.width
    height = max(1, round(image.height * ratio))
    return image.resize((max_width, height), Image.Resampling.LANCZOS)


def main() -> None:
    files = sorted(
        path
        for path in SOURCE_DIR.rglob("*")
        if path.is_file() and path.name != ".DS_Store"
    )

    for source in files:
        relative = source.relative_to(SOURCE_DIR).with_suffix(".webp")
        image = open_first_frame(source)

        for variant, settings in VARIANTS.items():
            target = OUTPUT_DIR / variant / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            resized = resize_to_width(image, settings["max_width"])
            resized.save(
                target,
                "WEBP",
                quality=settings["quality"],
                method=6,
                optimize=True,
            )

    print(f"Generated {len(files)} source images into {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
