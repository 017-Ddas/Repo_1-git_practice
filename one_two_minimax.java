import java.io.*;
import java.util.Arrays;
    public class one_two_minimax{
       public static void main(String[] args) throws IOException{
         BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
         int lenght_of_array = Integer.parseInt(in.readLine());
         int array[] = new int[lenght_of_array];
         int i = 0;
         while(i<lenght_of_array)
         {
            array[i] = Integer.parseInt(in.readLine());
            i++;
         }
         Arrays.sort(array);
         int minimun_sum = 0, maximum_sum = 0;
         int j = 0;
         while(j<lenght_of_array-1)
         {
            array[j] = Integer.parseInt(in.readLine());
            minimun_sum = array[j] + minimun_sum;
            j++;
         }
         int k = 1;
         while(k<lenght_of_array)
         {
            array[k] = Integer.parseInt(in.readLine());
            maximum_sum = array[k] + maximum_sum;
            k++;
         }
         System.out.println(minimun_sum);
         System.out.println(maximum_sum);
         
      }
   }