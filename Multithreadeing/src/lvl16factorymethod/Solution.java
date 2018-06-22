package lvl16factorymethod;


import lvl16factorymethod.common.ImageReader;

public class Solution {
    public static void main(String[] args) {

        ImageReader reader = ImageReaderFactory.getImageReader(null);

    }
}
