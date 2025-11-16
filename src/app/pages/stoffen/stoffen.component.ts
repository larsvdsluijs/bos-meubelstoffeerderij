import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Brand = {
  name: string;
  logoUrl: string;
  website?: string;
};

@Component({
  selector: 'app-stoffen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stoffen.component.html',
  styleUrls: ['./stoffen.component.scss'],
})
export class StoffenComponent {
  brands: Brand[] = [
    { name: 'Alcantara', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Alcantara_logo.svg/512px-Alcantara_logo.svg.png', website: 'https://www.alcantara.com' },
    { name: 'Kvadrat', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Kvadrat_logo.svg/512px-Kvadrat_logo.svg.png', website: 'https://www.kvadrat.dk' },
    { name: 'De Ploeg', logoUrl: 'https://www.deploeg.com/wp-content/uploads/2020/03/logo-de-ploeg-zwart.svg', website: 'https://www.deploeg.com' },
    { name: 'Romo', logoUrl: 'https://www.romo.com/-/media/romo/group/romo/brand/romo-logo.ashx' , website: 'https://www.romo.com' },
    { name: 'JAB Anstoetz', logoUrl: 'https://www.jab.de/typo3conf/ext/jab_site/Resources/Public/Images/logos/JAB_Logo.svg', website: 'https://www.jab.de' },
    { name: 'Chivasso', logoUrl: 'https://www.chivasso.nl/typo3conf/ext/jab_site/Resources/Public/Images/logos/Chivasso_Logo.svg', website: 'https://www.chivasso.nl' },
    { name: 'Designers Guild', logoUrl: 'https://www.designersguild.com/images/logos/dg-logo.svg', website: 'https://www.designersguild.com' },
    { name: 'Artifort', logoUrl: 'https://www.artifort.com/Content/Images/artifort-logo.svg', website: 'https://www.artifort.com' },
    { name: 'Gabriel', logoUrl: 'https://www.gabriel.dk/-/media/gabriel/logos/gabriel-logo.svg', website: 'https://www.gabriel.dk' },
    { name: 'Spradling (Kunstleer)', logoUrl: 'https://www.spradling.eu/img/logo.svg', website: 'https://www.spradling.eu' },
    { name: 'Skai (Kunstleer)', logoUrl: 'https://www.skai.com/typo3conf/ext/innovias/Resources/Public/Images/skai-logo.svg', website: 'https://www.skai.com' },
  ];
}


