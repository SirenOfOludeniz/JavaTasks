package lvl16;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class OutputOfFiles {
    public static String firstFileName;
    public static String secondFileName;

    static {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        try {
            firstFileName = reader.readLine();
            secondFileName = reader.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    //add your code here - добавьте код тут

    public static void main(String[] args) throws InterruptedException {
        systemOutPrintln(firstFileName);
        systemOutPrintln(secondFileName);
    }

    public static void systemOutPrintln(String fileName) throws InterruptedException {
        ReadFileInterface f = new ReadFileThread();
        f.setFileName(fileName);
        f.start();
        f.join();
        //add your code here - добавьте код тут
        System.out.println(f.getFileContent());
    }

    public interface ReadFileInterface {

        void setFileName(String fullFileName);

        String getFileContent();

        void join() throws InterruptedException;

        void start();
    }

    public static class ReadFileThread extends Thread implements ReadFileInterface{
        public String nameFile;
        public String fileContet = "";
        ArrayList<String> list;

        public ReadFileThread() {
            this.nameFile = null;
            this.list = new ArrayList<>();
        }
        @Override
        public void setFileName(String fullFileName) {
            this.nameFile = fullFileName;
        }
      /*  @Override
        public String getFileContent() {
            String result;
            String a;
            StringBuffer sbuf = new StringBuffer();
            for (String s : list) {
                sbuf.append(s).append(" ");
            }
            a = sbuf.toString();
            result = a.trim();
            return result;
        }*/

        @Override
        public String getFileContent() {
            return fileContet;
        }

       /* public void run() {
            try {
                BufferedReader fileReader = new BufferedReader(new InputStreamReader(new FileInputStream(nameFile)));
                while(fileReader.ready()) {
                    list.add(fileReader.readLine());
                }
                fileReader.close();

            } catch(FileNotFoundException e) {
                System.out.println("File not found");
            }
            catch (IOException e) {
                System.out.println("");
            }
        }*/

        @Override
        public void run() {

            try {
                BufferedReader bufRead = new BufferedReader(new InputStreamReader(new FileInputStream(nameFile)));

                String word;
                while ((word = bufRead.readLine()) != null) {
                    list.add(word);
                }
                bufRead.close();
            } catch (IOException e) {
                System.out.println("File not found");
            }

            StringBuffer buffer = new StringBuffer("");

            for (String tmp : list) {
                buffer.append(tmp);
                buffer.append(" ");
            }
            String result = buffer.toString();
            this.fileContet = result.trim();

        }
    }

    //add your code here - добавьте код тут
}


