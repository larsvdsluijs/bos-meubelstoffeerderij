import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  images: string[] = [
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/0502338b-a5f9-43b7-5f6c-90d270ee5b00/publicContain',
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/77e223fe-c1dc-489c-1892-3c5b3fb5b700/public',
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/f7ae326f-7166-47eb-6696-0f6aca404500/publicContain',
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/32bf9b5f-a893-4a36-7a21-a6d05c98f400/public',
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8d6e30bf-c355-464e-51ee-4cedf9727000/publicContain',
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/7211f3ef-de80-4f86-b6bd-325e6a2f2700/public',
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/9a9bc28e-86b9-471d-b10c-ef37a1f5b100/public',
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/0502338b-a5f9-43b7-5f6c-90d270ee5b00/publicContain',
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/77e223fe-c1dc-489c-1892-3c5b3fb5b700/public',
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/f7ae326f-7166-47eb-6696-0f6aca404500/publicContain',
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/32bf9b5f-a893-4a36-7a21-a6d05c98f400/public',
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8d6e30bf-c355-464e-51ee-4cedf9727000/publicContain',
    'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/7211f3ef-de80-4f86-b6bd-325e6a2f2700/public',
    // extra test afbeeldingen
    'https://images.unsplash.com/photo-1582582429416-8a79d9a1eeb8?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519710884002-1f1f84d3e0c6?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519710884002-1f1f84d3e0c6?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598300183693-4763f7a1b6b9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=800&auto=format&fit=crop'
  ];
}


