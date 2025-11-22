
export interface CompanySettings {
  id: string;
  company_name: string;
  company_name_ar: string;
  logo_url?: string;
  address?: string;
  address_ar?: string;
  phone?: string;
  email?: string;
  default_language: 'en' | 'ar';
  created_at: string;
  updated_at: string;
}

export interface RawMaterial {
  id: string;
  name: string;
  name_ar: string;
  unit: 'kg' | 'grams' | 'units';
  current_stock: number;
  unit_price_dzd: number;
  total_value_dzd: number;
  reorder_level?: number;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  name_ar: string;
  pieces_per_unit: number;
  pieces_per_carton: number;
  production_cost_dzd: number;
  sell_price_unit_dzd: number;
  sell_price_carton_dzd: number;
  current_stock_units: number;
  created_at: string;
  updated_at: string;
}

export interface FixedCost {
  id: string;
  name: string;
  name_ar: string;
  amount_dzd: number;
  frequency: 'monthly' | 'annual' | 'one-time';
  category: 'salary' | 'rent' | 'utilities' | 'other';
  created_at: string;
  updated_at: string;
}

export interface MaterialMovement {
  id: string;
  material_id: string;
  quantity: number;
  movement_type: 'stock_to_production' | 'purchase' | 'adjustment';
  reference_id?: string;
  notes?: string;
  created_at: string;
  created_by?: string;
}

export interface ProductionBatch {
  id: string;
  product_id: string;
  quantity_produced: number;
  material_costs_dzd: number;
  fixed_costs_allocated_dzd: number;
  total_cost_dzd: number;
  unit_cost_dzd: number;
  production_date: string;
  notes?: string;
  created_at: string;
}

export interface Sale {
  id: string;
  product_id: string;
  quantity_units: number;
  quantity_cartons: number;
  total_pieces: number;
  unit_price_dzd: number;
  total_amount_dzd: number;
  customer_name?: string;
  sale_date: string;
  notes?: string;
  created_at: string;
}

export interface InventoryTransaction {
  id: string;
  product_id: string;
  quantity_change: number;
  transaction_type: 'production' | 'sale' | 'adjustment';
  reference_id?: string;
  notes?: string;
  created_at: string;
}