
# Cotton Buds Factory Management App - Project Plan

## Project Overview
A comprehensive factory management application for a small cotton buds manufacturing facility. The app manages raw materials inventory, production tracking, cost calculation, sales, and multi-language support (Arabic/English).

## Core Requirements Analysis

### 1. Raw Materials Management
- Track 6 main raw materials with different units:
  - Cotton (kg)
  - Paper (kg)
  - PP Box (units)
  - Glue (grams)
  - Corrugated Carton (units)
  - Labeling Stickers (units)
- Extensible system for adding new materials
- All materials valued in DZD (Algerian Dinar)
- Track material movements from stock to production
- Time-based tracking of material usage

### 2. Cost Management
- Fixed costs: Salaries, Rent
- Variable costs: Raw materials
- Unit cost calculation per product
- Production cost tracking over time

### 3. Products
- 3 initial products (200 pcs each):
  - Custom Head
  - Pointed Head
  - Spiral Head
- Same production cost, different selling prices
- Ability to add new products
- Packaging: Individual units or corrugated cartons (48 pcs)

### 4. Production Management
- Move materials from stock to production area
- Track production over time
- Calculate production costs
- Update finished goods inventory

### 5. Sales & Inventory
- Sell products in units or cartons (48 pcs)
- Track sales over time
- Manage finished goods inventory
- Sales history and reporting

### 6. Company Settings
- Company information management
- Logo upload and display
- Multi-language support (Arabic/English)

## Technical Architecture

### Database Schema (Supabase)
1. **company_settings** - Company info, logo URL, default language
2. **raw_materials** - Material definitions (name, unit, current_stock, value_dzd)
3. **products** - Product definitions (name, cost, sell_price)
4. **fixed_costs** - Salaries, rent, other fixed expenses
5. **material_movements** - Track stock to production transfers
6. **production_batches** - Production records with costs
7. **sales** - Sales transactions
8. **inventory_transactions** - Finished goods movements

### Frontend Structure
- React + TypeScript + Vite
- React Router for navigation
- Supabase for backend
- Shadcn/ui components
- i18n for Arabic/English support
- React Query for data management

## Task Breakdown

### Phase 1: Foundation & Setup ✅ COMPLETED
**Task 1.1: Project Setup & Design System** [COMPLETED]
- ✅ Create design system with Arabic/English support
- ✅ Setup routing structure
- ✅ Create base layout with navigation
- ✅ Implement language switcher
- ✅ Create all page placeholders
- Files created: 15

**Task 1.2: Database Schema Setup** [NEXT]
- Create all database tables
- Setup RLS policies
- Create initial seed data
- Estimated complexity: Medium

### Phase 2: Core Features [PENDING]
**Task 2.1: Company Settings** [PENDING]
- Company info form
- Logo upload functionality
- Settings persistence
- Estimated files: 3-4

**Task 2.2: Raw Materials Management** [PENDING]
- Materials list/grid view
- Add/Edit/Delete materials
- Stock level tracking
- Material value in DZD
- Estimated files: 4-5

**Task 2.3: Products Management** [PENDING]
- Products list view
- Add/Edit/Delete products
- Cost and price management
- Estimated files: 4-5

**Task 2.4: Fixed Costs Management** [PENDING]
- Salaries tracking
- Rent and other fixed costs
- Monthly/annual views
- Estimated files: 3-4

### Phase 3: Operations [PENDING]
**Task 3.1: Material Movement (Stock to Production)** [PENDING]
- Transfer materials interface
- Movement history
- Time-based tracking
- Stock updates
- Estimated files: 4-5

**Task 3.2: Production Management** [PENDING]
- Create production batches
- Calculate production costs
- Update finished goods inventory
- Production history
- Estimated files: 5-6

**Task 3.3: Sales Management** [PENDING]
- Sales entry (units/cartons)
- Invoice generation
- Sales history
- Inventory updates
- Estimated files: 5-6

### Phase 4: Analytics & Reports [PENDING]
**Task 4.1: Cost Analysis Dashboard** [PENDING]
- Unit cost calculation
- Cost breakdown visualization
- Profit margins
- Estimated files: 3-4

**Task 4.2: Inventory Reports** [PENDING]
- Raw materials status
- Finished goods status
- Movement reports
- Estimated files: 3-4

**Task 4.3: Sales Reports** [PENDING]
- Sales by product
- Sales by time period
- Revenue analysis
- Estimated files: 3-4

## File Structure Plan