
export interface CompanyInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  nif: string;
  nis: string;
  article_imposition: string;
  rc: string;
  logo_url?: string;
  created_at?: string;
  updated_at?: string;
}

export interface RawMaterial {
  id: string;
  name: string;
  unit: string;
  current_stock: number;
  unit_price: number;
  reorder_level: number;
  created_at?: string;
  updated_at?: string;
}

export interface Product {
  id: string;
  name: string;
  pieces_per_unit: number;
  pieces_per_carton: number;
  production_cost: number;
  sell_price_unit: number;
  sell_price_carton: number;
  current_stock: number;
  created_at?: string;
  updated_at?: string;
}

export interface ProductionBatch {
  id: string;
  product_id: string;
  quantity: number;
  material_costs: number;
  fixed_costs: number;
  total_cost: number;
  unit_cost: number;
  production_date: string;
  notes?: string;
  created_at?: string;
}

export interface Sale {
  id: string;
  product_id: string;
  quantity_units: number;
  quantity_cartons: number;
  total_pieces: number;
  unit_price: number;
  total_amount: number;
  customer_name: string;
  customer_address?: string;
  customer_nif?: string;
  sale_date: string;
  invoice_number: string;
  created_at?: string;
}

export interface Invoice {
  id: string;
  sale_id: string;
  invoice_number: string;
  invoice_date: string;
  subtotal: number;
  tva_amount: number;
  total_amount: number;
  generated_at: string;
}

export type Database = {
  public: {
    Tables: {
      company_info: {
        Row: CompanyInfo;
        Insert: Omit<CompanyInfo, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<CompanyInfo, 'id' | 'created_at' | 'updated_at'>>;
      };
      raw_materials: {
        Row: RawMaterial;
        Insert: Omit<RawMaterial, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<RawMaterial, 'id' | 'created_at' | 'updated_at'>>;
      };
      products: {
        Row: Product;
        Insert: Omit<Product, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Product, 'id' | 'created_at' | 'updated_at'>>;
      };
      production_batches: {
        Row: ProductionBatch;
        Insert: Omit<ProductionBatch, 'id' | 'created_at'>;
        Update: Partial<Omit<ProductionBatch, 'id' | 'created_at'>>;
      };
      sales: {
        Row: Sale;
        Insert: Omit<Sale, 'id' | 'created_at'>;
        Update: Partial<Omit<Sale, 'id' | 'created_at'>>;
      };
      invoices: {
        Row: Invoice;
        Insert: Omit<Invoice, 'id'>;
        Update: Partial<Omit<Invoice, 'id'>>;
      };
    };
  };
};