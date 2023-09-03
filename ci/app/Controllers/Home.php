<?php

namespace App\Controllers;

class Home extends BaseController
{

    public function __construct()
    {
        // Initialize the cURL library
        $this->curl = curlrequest();
    }

    public function index(): string
    {
        return view('auth/login');
    }

    public function user(): string 
    {
        return view('user/index');
    }

    public function pegawai(): string
    {
        $url = 'localhost:3000/api/pegawais';
        $response = $this->curl->simple_get($url);

        if ($response) {
            // Handle the API response
            echo $response;
        } else {
            // Handle the error
            echo 'API request failed';
        }
        return view('pegawai/index');
    }
}
