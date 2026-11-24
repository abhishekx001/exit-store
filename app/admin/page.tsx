"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "products" | "orders">("overview");
  const [products, setProducts] = useState(MOCK_PRODUCTS);

  const [orders, setOrders] = useState([
    {
      id: "EX-849201",
      customer: "Kabir Sharma",
      phone: "+91 98765 43210",
      total: 3299,
      status: "confirmed",
      itemsCount: 2,
      payment: "COD",
      date: "Today, 10:45 AM",
    },
    {
      id: "EX-731940",
      customer: "Arjun Verma",
      phone: "+91 98111 22334",
      total: 1499,
      status: "shipped",
      itemsCount: 1,
      payment: "Razorpay",
      date: "Yesterday",
    },
    {
      id: "EX-610283",
      customer: "Neil Kapoor",
      phone: "+91 97234 56789",
      total: 4998,
      status: "delivered",
      itemsCount: 3,
      payment: "COD",
      date: "3 days ago",
    },
  ]);

  const handleToggleProductStatus = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, is_active: !p.is_active } : p))
    );
    toast.success("Product visibility updated");
  };

  const handleUpdateOrderStatus = (orderId: string, nextStatus: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: nextStatus } : o))
    );
    toast.success(`Order ${orderId} marked as ${nextStatus.toUpperCase()}`);
  };

  return (
    <div className="min-h-[100dvh] pb-24 bg-bg text-ink">
      <div className="pt-10 sm:pt-16 pb-8 border-b border-hair">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-mono block mb-2">
              (Studio Management)
            </span>
            <h1 className="font-display font-extrabold text-[clamp(36px,6vw,84px)] leading-headline tracking-tighter uppercase text-ink">
              Operations Admin
            </h1>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs">
            <button
              onClick={() => setActiveTab("overview")}
              className={`hover:underline cursor-pointer ${
                activeTab === "overview" ? "text-ink font-bold underline" : "text-muted"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`hover:underline cursor-pointer ${
                activeTab === "products" ? "text-ink font-bold underline" : "text-muted"
              }`}
            >
              Products ({products.length})
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`hover:underline cursor-pointer ${
                activeTab === "orders" ? "text-ink font-bold underline" : "text-muted"
              }`}
            >
              Orders ({orders.length})
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-10 sm:pt-14 font-mono text-xs">
        {activeTab === "overview" && (
          <div className="space-y-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-hair border-y border-hair py-6">
              <div className="pt-2 lg:pt-0 lg:pr-6">
                <span className="text-muted uppercase tracking-mono block">Today&apos;s Revenue</span>
                <span className="font-display font-black text-2xl text-ink mt-1 block">
                  {formatPrice(34290)}
                </span>
              </div>
              <div className="pt-4 lg:pt-0 lg:px-6">
                <span className="text-muted uppercase tracking-mono block">Pending Dispatch</span>
                <span className="font-display font-black text-2xl text-ink mt-1 block">
                  14 Orders
                </span>
              </div>
              <div className="pt-4 lg:pt-0 lg:px-6">
                <span className="text-muted uppercase tracking-mono block">Catalog Pieces</span>
                <span className="font-display font-black text-2xl text-ink mt-1 block">
                  {products.length} Garments
                </span>
              </div>
              <div className="pt-4 lg:pt-0 lg:pl-6">
                <span className="text-muted uppercase tracking-mono block">Bio Conversion</span>
                <span className="font-display font-black text-2xl text-ink mt-1 block">
                  4.8%
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-muted uppercase tracking-mono block">Recent Inbound Orders</span>
              <div className="border-t border-hair divide-y divide-hair">
                {orders.map((o) => (
                  <div key={o.id} className="py-3.5 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-ink mr-2">{o.id}</span>
                      <span className="text-muted">{o.customer} ({o.payment})</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-ink">{formatPrice(o.total)}</span>
                      <span className="text-muted uppercase text-[11px]">{o.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div className="divide-y divide-hair border-y border-hair">
            {products.map((p) => (
              <div key={p.id} className="py-4 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-ink font-body text-sm">{p.name}</h4>
                  <span className="text-muted text-[11px] block">{p.fabric}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-bold text-ink">{formatPrice(p.price)}</span>
                  <button
                    onClick={() => handleToggleProductStatus(p.id)}
                    className="hover:underline text-muted hover:text-ink cursor-pointer"
                  >
                    {p.is_active ? "[Active]" : "[Archived]"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "orders" && (
          <div className="divide-y divide-hair border-y border-hair space-y-2">
            {orders.map((o) => (
              <div key={o.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-ink">{o.id}</span>
                    <span>{o.customer}</span>
                    <span className="text-muted">({o.phone})</span>
                  </div>
                  <span className="text-muted text-[11px] block mt-0.5">
                    {o.itemsCount} items • {formatPrice(o.total)} via {o.payment}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-muted uppercase tracking-mono text-[10px]">Status:</span>
                  {["confirmed", "shipped", "delivered"].map((st) => (
                    <button
                      key={st}
                      onClick={() => handleUpdateOrderStatus(o.id, st)}
                      className={`uppercase text-[11px] px-2 py-1 border cursor-pointer ${
                        o.status === st ? "border-ink bg-ink text-white font-bold" : "border-hair text-muted"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
