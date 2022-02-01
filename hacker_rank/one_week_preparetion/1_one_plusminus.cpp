#include<iostream>
#include<iomanip>


using namespace std;

void display(double, double, double);

void plusminus(int n, double arr[])
{
    double counter_positive = 0, counter_negative = 0, counter_zero = 0;
    int i = 0;
    while(i!=n)
    {
        if(arr[i]>0)
            counter_positive++;
        else if(arr[i]<0)
            counter_negative++;
        else
            counter_zero++;

        i++;
    }
    double positive_ratio = counter_positive / n;
    double negative_ratio = counter_negative / n;
    double zero_ratio = counter_zero / n;
    display(positive_ratio, negative_ratio, zero_ratio);
}

void display(double ratio1, double ratio2,double ratio3)
{
    cout << std::fixed << std::setprecision(6) << ratio1 << endl;
    cout << std::fixed << std::setprecision(6) << ratio2 << endl;
    cout << std::fixed << std::setprecision(6) << ratio3 << endl;
}

int main()
{
    int n;
    cin >> n;
    double arr[n];
    int i = 0;
    while(i!=n)
    {
        cin >> arr[i];
        i++;
    }
    // cout << "print code" << endl;
    // int j = 0;
    // while(j<n)
    // {
    //     cout << arr[j] << "\t";
    //     j++;
    // }

    // cout << endl; 

    plusminus(n, arr);

    return 0;
}