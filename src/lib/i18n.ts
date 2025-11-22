
export type Language = 'en' | 'ar';

export interface Translations {
  [key: string]: string | Translations;
}

export const translations: Record<Language, Translations> = {
  en: {
    app: {
      title: 'Cotton Buds Factory Manager',
      subtitle: 'Production & Inventory Management'
    },
    nav: {
      dashboard: 'Dashboard',
      materials: 'Raw Materials',
      products: 'Products',
      production: 'Production',
      sales: 'Sales',
      reports: 'Reports',
      settings: 'Settings'
    },
    common: {
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      save: 'Save',
      cancel: 'Cancel',
      search: 'Search',
      filter: 'Filter',
      export: 'Export',
      import: 'Import',
      loading: 'Loading...',
      noData: 'No data available',
      confirm: 'Confirm',
      success: 'Success',
      error: 'Error',
      warning: 'Warning',
      info: 'Information'
    },
    units: {
      kg: 'kg',
      grams: 'grams',
      units: 'units',
      pieces: 'pieces',
      carton: 'carton',
      cartons: 'cartons',
      dzd: 'DZD'
    },
    dashboard: {
      title: 'Dashboard',
      overview: 'Overview',
      rawMaterials: 'Raw Materials Stock',
      finishedGoods: 'Finished Goods',
      recentProduction: 'Recent Production',
      recentSales: 'Recent Sales',
      lowStock: 'Low Stock Alert'
    },
    materials: {
      title: 'Raw Materials',
      addMaterial: 'Add Material',
      editMaterial: 'Edit Material',
      name: 'Material Name',
      unit: 'Unit',
      currentStock: 'Current Stock',
      unitPrice: 'Unit Price',
      totalValue: 'Total Value',
      reorderLevel: 'Reorder Level',
      moveToProduction: 'Move to Production'
    },
    products: {
      title: 'Products',
      addProduct: 'Add Product',
      editProduct: 'Edit Product',
      name: 'Product Name',
      piecesPerUnit: 'Pieces per Unit',
      piecesPerCarton: 'Pieces per Carton',
      productionCost: 'Production Cost',
      sellPriceUnit: 'Sell Price (Unit)',
      sellPriceCarton: 'Sell Price (Carton)',
      currentStock: 'Current Stock'
    },
    production: {
      title: 'Production',
      newBatch: 'New Production Batch',
      selectProduct: 'Select Product',
      quantity: 'Quantity to Produce',
      materialCosts: 'Material Costs',
      fixedCosts: 'Fixed Costs Allocated',
      totalCost: 'Total Cost',
      unitCost: 'Unit Cost',
      productionDate: 'Production Date',
      notes: 'Notes'
    },
    sales: {
      title: 'Sales',
      newSale: 'New Sale',
      selectProduct: 'Select Product',
      quantityUnits: 'Quantity (Units)',
      quantityCartons: 'Quantity (Cartons)',
      totalPieces: 'Total Pieces',
      unitPrice: 'Unit Price',
      totalAmount: 'Total Amount',
      customerName: 'Customer Name',
      saleDate: 'Sale Date'
    },
    settings: {
      title: 'Settings',
      company: 'Company Information',
      companyName: 'Company Name',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      logo: 'Company Logo',
      uploadLogo: 'Upload Logo',
      language: 'Language',
      defaultLanguage: 'Default Language'
    }
  },
  ar: {
    app: {
      title: 'إدارة مصنع أعواد القطن',
      subtitle: 'إدارة الإنتاج والمخزون'
    },
    nav: {
      dashboard: 'لوحة التحكم',
      materials: 'المواد الخام',
      products: 'المنتجات',
      production: 'الإنتاج',
      sales: 'المبيعات',
      reports: 'التقارير',
      settings: 'الإعدادات'
    },
    common: {
      add: 'إضافة',
      edit: 'تعديل',
      delete: 'حذف',
      save: 'حفظ',
      cancel: 'إلغاء',
      search: 'بحث',
      filter: 'تصفية',
      export: 'تصدير',
      import: 'استيراد',
      loading: 'جاري التحميل...',
      noData: 'لا توجد بيانات',
      confirm: 'تأكيد',
      success: 'نجح',
      error: 'خطأ',
      warning: 'تحذير',
      info: 'معلومات'
    },
    units: {
      kg: 'كجم',
      grams: 'جرام',
      units: 'وحدة',
      pieces: 'قطعة',
      carton: 'كرتون',
      cartons: 'كراتين',
      dzd: 'دج'
    },
    dashboard: {
      title: 'لوحة التحكم',
      overview: 'نظرة عامة',
      rawMaterials: 'مخزون المواد الخام',
      finishedGoods: 'المنتجات الجاهزة',
      recentProduction: 'الإنتاج الأخير',
      recentSales: 'المبيعات الأخيرة',
      lowStock: 'تنبيه مخزون منخفض'
    },
    materials: {
      title: 'المواد الخام',
      addMaterial: 'إضافة مادة',
      editMaterial: 'تعديل مادة',
      name: 'اسم المادة',
      unit: 'الوحدة',
      currentStock: 'المخزون الحالي',
      unitPrice: 'سعر الوحدة',
      totalValue: 'القيمة الإجمالية',
      reorderLevel: 'مستوى إعادة الطلب',
      moveToProduction: 'نقل للإنتاج'
    },
    products: {
      title: 'المنتجات',
      addProduct: 'إضافة منتج',
      editProduct: 'تعديل منتج',
      name: 'اسم المنتج',
      piecesPerUnit: 'قطع لكل وحدة',
      piecesPerCarton: 'قطع لكل كرتون',
      productionCost: 'تكلفة الإنتاج',
      sellPriceUnit: 'سعر البيع (وحدة)',
      sellPriceCarton: 'سعر البيع (كرتون)',
      currentStock: 'المخزون الحالي'
    },
    production: {
      title: 'الإنتاج',
      newBatch: 'دفعة إنتاج جديدة',
      selectProduct: 'اختر المنتج',
      quantity: 'الكمية المنتجة',
      materialCosts: 'تكاليف المواد',
      fixedCosts: 'التكاليف الثابتة المخصصة',
      totalCost: 'التكلفة الإجمالية',
      unitCost: 'تكلفة الوحدة',
      productionDate: 'تاريخ الإنتاج',
      notes: 'ملاحظات'
    },
    sales: {
      title: 'المبيعات',
      newSale: 'بيع جديد',
      selectProduct: 'اختر المنتج',
      quantityUnits: 'الكمية (وحدات)',
      quantityCartons: 'الكمية (كراتين)',
      totalPieces: 'إجمالي القطع',
      unitPrice: 'سعر الوحدة',
      totalAmount: 'المبلغ الإجمالي',
      customerName: 'اسم العميل',
      saleDate: 'تاريخ البيع'
    },
    settings: {
      title: 'الإعدادات',
      company: 'معلومات الشركة',
      companyName: 'اسم الشركة',
      address: 'العنوان',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      logo: 'شعار الشركة',
      uploadLogo: 'رفع الشعار',
      language: 'اللغة',
      defaultLanguage: 'اللغة الافتراضية'
    }
  }
};

export function getNestedTranslation(obj: Translations, path: string): string {
  const keys = path.split('.');
  let current: any = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return path;
    }
  }
  
  return typeof current === 'string' ? current : path;
}

export function translate(language: Language, key: string): string {
  return getNestedTranslation(translations[language], key);
}