import java.io.*;
public class one_plusminus {
    public static void main(String[] args) throws IOException 
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        double number = Double.parseDouble(in.readLine());
        double array[];
        

        // int backup_number = number;
        int counter = 0;
        while(number!=0)
        {
            
            number = number / 10;
            counter++;
        }
        System.out.print("Number of digits:\t"+ counter);
    }
}