export type Person = {
  name: string;
  age: number;
};

export type Product = {
  title: string;
  price: number;
  onSale: boolean;
};

export type ScoreEntry = {
  candidate: string;
  score: number;
};

export type Employee = {
  name: string;
  department: string;
};

export type Article = {
  id: number;
  tags: string[];
};

export type Order = {
  customer: string;
  amount: number;
};

export type Owner = {
  owner: string;
  pets: Array<{
    name: string;
    active: boolean;
  }>;
};

export type Purchase = {
  category: string;
  amount: number;
};

export type Transaction = {
  id?: string;
  amount?: number;
  approved?: boolean;
};

export type Session = {
  userId: string;
  durationMinutes: number;
  completed: boolean;
};

function notImplemented(name: string): never {
  throw new Error(`TODO: implement ${name} in src/katas.ts`);
}

export function namesUppercase(json: string): string[] {
  const data = JSON.parse(json) as string[];
  return data.map((str) => str.toUpperCase());

}

export function filterAdults(json: string): Person[] {
  const data = JSON.parse(json);


  
//   var newArr = data.map((obj) => { if 
//     (obj.age >= 18) {
//       return obj.age;
//     }
//   });
// return newArr;

  // notImplemented("filterAdults");
}

export function totalPrice(json: string): number {
  notImplemented("totalPrice");
}

export function discountedTitles(json: string): string[] {
  notImplemented("discountedTitles");
}

export function averageScore(json: string): number {
  notImplemented("averageScore");
}

export function countByDepartment(json: string): Record<string, number> {
  notImplemented("countByDepartment");
}

export function uniqueTags(json: string): string[] {
  notImplemented("uniqueTags");
}

export function topSpender(json: string): string | null {
  notImplemented("topSpender");
}

export function activePetNames(json: string): string[] {
  notImplemented("activePetNames");
}

export function revenueByCategory(json: string): Record<string, number> {
  notImplemented("revenueByCategory");
}

export function validTransactionIds(json: string): string[] {
  notImplemented("validTransactionIds");
}

export function sessionReport(json: string): {
  totalSessions: number;
  completedSessions: number;
  totalDurationMinutes: number;
  averageDurationMinutes: number;
  completedUserIds: string[];
} {
  notImplemented("sessionReport");
}
