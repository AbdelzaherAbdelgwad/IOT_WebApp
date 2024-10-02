import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from '../Services/auth-login.service';
import { Chart } from 'chart.js';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
//import { Label } from 'ng2-charts';
@Component({
  selector: 'app-security-admin',
  templateUrl: './security-admin.component.html',
  styleUrls: ['./security-admin.component.css']
})

export class SecurityAdminComponent {
  dosAttackCount: number = 0;
  bruteForceCount: number = 0;
  cowrieCount: number = 0;
  portScanCount: number = 0;
  logs: any;
  ipAddress: any;
  datas: number[] = [10, 20, 30, 40];
 
  constructor(private http: HttpClient, private auth: AuthLoginService) {

    this.http.get('http://192.168.1.3:9191/Logs/findAllLogs').subscribe((data: any) => this.logs = (data));

  }
  attIpAddress(command: string): string {
 
    const regex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/;
    const ipAddress = command.match(regex)?.[0] || '';
    return ipAddress || 'null';
  }
  victimIpAddress(command: string): string {
    const regex = /(?:\d{1,3}\.){3}\d{1,3}(?:(?!.*?(?:\d{1,3}\.){3}\d{1,3}).*$){2}/;
    const ipAddressWithPort = command.match(regex)?.[0]|| '';
    //const ipAddress = ipAddressWithPort.split(':')[0];
    return ipAddressWithPort || 'null';

  }
  logout() {
    this.auth.logout();
    localStorage.setItem('auth', 'false')
    console.log(this.auth.authenticated());

  }

  numOfAttacks(logs: string){
    
      if (logs.includes("Nmap")) {
        this.portScanCount +=1;
      } 
      if (logs.toLowerCase().includes("dos")) {
        this.dosAttackCount+=1;
      }
      if (logs.toLowerCase().includes("brute")) {
        this.bruteForceCount+=1;
      }
      if (logs.toLowerCase().includes("cowrie")) {
        this.cowrieCount+=1;
      }
  }
  

}
