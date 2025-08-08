from PIL import Image
import os

# Input and output folders
INPUT_DIR = 'images/originals'
OUTPUT_DIR_LOW = 'images/low_res'
OUTPUT_DIR_MED = 'images/medium_res'

# Create output dirs if they don't exist
os.makedirs(OUTPUT_DIR_LOW, exist_ok=True)
os.makedirs(OUTPUT_DIR_MED, exist_ok=True)

# Resize settings
LOW_RES_SIZE = (300, 200)   # thumbnails (smallest)
MED_RES_SIZE = (1200, 800)  # medium (lightbox)

def resize_image(input_path, output_path, size):
    with Image.open(input_path) as img:
        img.thumbnail(size)
        img.save(output_path, optimize=True, quality=85)
        print(f"Saved resized image: {output_path}")

def process_all_images():
    for filename in os.listdir(INPUT_DIR):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            input_path = os.path.join(INPUT_DIR, filename)
            
            # Low res
            low_res_path = os.path.join(OUTPUT_DIR_LOW, filename)
            resize_image(input_path, low_res_path, LOW_RES_SIZE)

            # Medium res
            med_res_path = os.path.join(OUTPUT_DIR_MED, filename)
            resize_image(input_path, med_res_path, MED_RES_SIZE)

if __name__ == '__main__':
    process_all_images()