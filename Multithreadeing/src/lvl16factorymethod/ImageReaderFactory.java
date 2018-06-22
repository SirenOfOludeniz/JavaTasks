package lvl16factorymethod;


import lvl16factorymethod.common.*;

public class ImageReaderFactory {
    public static ImageReader getImageReader(ImageTypes imageTypes) {
        ImageReader image = null;

            if (!(imageTypes instanceof ImageTypes)) {

                throw new IllegalArgumentException();

            }



        if (imageTypes != null) {
            if (imageTypes.equals(imageTypes.BMP)) {
                image = new BmpReader();
            } else if (imageTypes.equals(imageTypes.PNG)) {
                image = new PngReader();
            } else if (imageTypes.equals(imageTypes.JPG)) {
                image = new JpgReader();
            }
        }

        return image;
    }
}
