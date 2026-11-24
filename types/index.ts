export type UserRole = "customer" | "admin";

export interface Profile {
  id: string;
  full_name: string | null;
  phone: string | null;
  role: UserRole;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image_url: string;
  sort_order: number;
  is_active: boolean;
  item_count?: number;
}

export interface ProductImage {
  id: string;
  product_id?: string;
  url: string;
  alt: string;
  sort_order: number;
}

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "28" | "30" | "32" | "34" | "36" | "38" | "Free Size" | string;

export interface ProductVariant {
  id: string;
  product_id?: string;
  size: Size;
  color: string;
  color_hex: string;
  sku: string;
  stock: number;
  price_override?: number | null;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  fabric: string;
  care: string;
  category_id: string;
  price: number;
  compare_at_price?: number | null;
  discount_percent?: number;
  tags: string[];
  is_featured: boolean;
  is_new: boolean;
  is_bestseller: boolean;
  is_active: boolean;
  created_at: string;
  images: ProductImage[];
  variants: ProductVariant[];
  category?: Category;
}

export interface CartItem {
  id?: string;
  variant_id: string;
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface Address {
  id?: string;
  user_id?: string;
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  is_default?: boolean;
}

export type PaymentMethod = "cod" | "razorpay";
export type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
export type PaymentStatus = "pending" | "paid" | "failed";

export interface OrderItem {
  id: string;
  order_id?: string;
  product_id: string;
  variant_id: string;
  name_snapshot: string;
  image_snapshot: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  order_number: string;
  user_id?: string | null;
  email: string;
  phone: string;
  address: Address;
  subtotal: number;
  shipping_fee: number;
  discount: number;
  total: number;
  payment_method: PaymentMethod;
  payment_status: PaymentStatus;
  status: OrderStatus;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  created_at: string;
  items: OrderItem[];
}

export interface Coupon {
  code: string;
  type: "percentage" | "flat";
  value: number;
  min_order: number;
  expires_at?: string;
  is_active: boolean;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  media_url: string;
  media_type: "image" | "video";
  cta_label: string;
  cta_href: string;
  placement: "hero" | "mid_banner" | "bottom";
  sort_order: number;
  is_active: boolean;
}

export interface Reel {
  id: string;
  title: string;
  video_url: string;
  poster_url: string;
  product_id: string;
  product?: Product;
  sort_order: number;
  is_active: boolean;
}
