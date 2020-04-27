import sys
import argparse
from yolo import YOLO, detect_video
from PIL import Image


if __name__ == '__main__':
    config = {
        "model_path": "logs/000/trained_weights_final.h5", # 加载模型
        "score": 0.1, # 超出这个值的预测才会被显示
        "iou": 0.3, # 交并比
    }
    yolo = YOLO(**config)
    image = Image.open("./img/1.jpg")
    r_image = yolo.detect_image(image)
    r_image.save("./img/2.jpg")