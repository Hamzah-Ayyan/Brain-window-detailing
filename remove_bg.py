import os
from rembg import remove
from PIL import Image

def remove_bg(input_path, output_path):
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)

input_path = r"C:\Users\NR\.gemini\antigravity\brain\d54d457f-45c8-4dcb-87b1-cf6d51c85806\hero_car_true_transparent_png_1772743485259.png"
output_path = r"c:\Users\NR\brain web nnn\public\assets\hero_car_true_transparent.png"

print("Removing background...")
try:
    remove_bg(input_path, output_path)
    print("Background removed successfully.")
except Exception as e:
    print(f"Error removing background: {e}")
