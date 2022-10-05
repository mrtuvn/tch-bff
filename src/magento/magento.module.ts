import { Injectable, Module } from '@nestjs/common';
import {HttpService}from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from '@nestjs/terminus/dist/health-indicator/http/axios.interfaces';
import { MagentoService } from './magento.service';

@Module({
  providers: [MagentoService],
  exports:[MagentoService]
})


export class MagentoModule {
    
}
