#include<iostream>
#include<bits/stdc++.h>
using namespace std;

void sum_up(long *arr,long len)
{
    sort(arr, arr + len);
    long j = 0, sum_min = 0;
    while(j<len-1)
    {
        sum_min = sum_min + arr[j];
        j++;
    }
    long k = 1, sum_max = 0;
    while(k<len)
    {
        sum_max = sum_max + arr[k];
        k++;
    }
    cout << sum_min << " " << sum_max;
}

long main()
{
    long n;
    n = 5;
    long array[n];
    for (long i = 0; i < n;i++)
    {
        cin >> array[i];
    }
    // long n = sizeof(array) / sizeof(array[0]);
    sum_up(array, n);
    return 0;
}