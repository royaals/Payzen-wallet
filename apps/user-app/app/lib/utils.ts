export function formatAmount(amount: number): string {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    
    });
  
    return formatter.format(amount);
  }
  