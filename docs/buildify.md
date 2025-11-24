## Requirements

### Cotton Buds Factory Management System
- Bilingual support (English/Arabic)
- Raw materials inventory management
- Products catalog management
- Production tracking with cost calculation
- Sales recording and tracking
- Company information management (Algeria tax law compliant)
- Invoice generation system (Algeria tax law compliant)

### Algeria Tax Law Compliance
- Company information must include: NIF (Tax ID), NIS (Statistical ID), Article d'imposition, RC (Commercial Register)
- Invoices must include: Invoice number, date, company details, customer details, itemized products with unit prices, subtotal, TVA (19%), total amount
- Invoice numbering system with proper sequencing

## Design

### Database Schema (Supabase)
- **company_info**: id, name, address, phone, email, nif, nis, article_imposition, rc, logo_url
- **raw_materials**: id, name, unit, current_stock, unit_price, reorder_level
- **products**: id, name, pieces_per_unit, pieces_per_carton, production_cost, sell_price_unit, sell_price_carton, current_stock
- **production_batches**: id, product_id, quantity, material_costs, fixed_costs, total_cost, unit_cost, production_date, notes
- **sales**: id, product_id, quantity_units, quantity_cartons, total_pieces, unit_price, total_amount, customer_name, customer_address, customer_nif, sale_date, invoice_number
- **invoices**: id, sale_id, invoice_number, invoice_date, subtotal, tva_amount, total_amount, generated_at

### UI Components
- Dialog forms for adding/editing entities
- Data tables with sorting and filtering
- Invoice preview and print functionality
- Company settings form with Algeria tax fields

## Tasks

### Task 1: Fix Add Buttons - Add onClick Handlers [COMPLETED]
**Status**: ✅ Completed
**Estimated Cost**: 50 LOC × 10 = 500 tokens
**Files**: Products.tsx, Materials.tsx, Sales.tsx
**Strategy**: Add state management and dialog components for each "Add" button

### Task 2: Company Information Form (Algeria Tax Law)
**Status**: ✅ Completed
**Estimated Cost**: 200 LOC × 10 = 2000 tokens
**Files**: Settings.tsx, types/database.ts
**Strategy**: Create comprehensive company info form with Algeria-specific fields (NIF, NIS, Article d'imposition, RC)

### Task 3: Database Schema Setup
**Status**: ⏳ Pending
**Estimated Cost**: 100 LOC × 10 = 1000 tokens
**Strategy**: Execute SQL to create all necessary tables with proper relationships and constraints

### Task 4: Invoice Generation System (Algeria Tax Law)
**Status**: ⏳ Pending
**Estimated Cost**: 300 LOC × 10 = 3000 tokens
**Files**: components/invoices/InvoiceGenerator.tsx, components/invoices/InvoicePreview.tsx
**Strategy**: Create invoice component with Algeria tax format (TVA 19%, proper numbering, all required fields)

### Task 5: CRUD Operations for Materials
**Status**: ⏳ Pending
**Estimated Cost**: 250 LOC × 10 = 2500 tokens
**Strategy**: Implement full CRUD with Supabase integration

### Task 6: CRUD Operations for Products
**Status**: ⏳ Pending
**Estimated Cost**: 250 LOC × 10 = 2500 tokens
**Strategy**: Implement full CRUD with Supabase integration

### Task 7: Sales Recording with Invoice Generation
**Status**: ⏳ Pending
**Estimated Cost**: 300 LOC × 10 = 3000 tokens
**Strategy**: Integrate sales form with automatic invoice generation

## Discussions

### Algeria Tax Law Requirements
- NIF (Numéro d'Identification Fiscale): Tax identification number
- NIS (Numéro d'Identification Statistique): Statistical identification number
- Article d'imposition: Tax article/category
- RC (Registre de Commerce): Commercial register number
- TVA: 19% standard rate for most goods
- Invoice format must include all company and customer tax identifiers
