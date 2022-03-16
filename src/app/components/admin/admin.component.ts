import { Component, OnInit } from '@angular/core';
import { ExportFileService } from '../../services/export-file.service'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private exportfile: ExportFileService) { }

  ngOnInit(): void {
  }

  exportar () {
    this.exportfile.getExcel()
}

}
