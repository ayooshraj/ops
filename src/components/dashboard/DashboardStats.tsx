
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  FolderOpen, 
  Receipt, 
  DollarSign
} from "lucide-react";

interface DashboardStatsProps {
  stats: {
    totalClients: number;
    activeProjects: number;
    pendingInvoices: number;
    totalRevenue: number;
  };
}

const DashboardStats = ({ stats }: DashboardStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Total Clients</CardTitle>
          <Users className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">{stats.totalClients}</div>
          <p className="text-xs text-gray-600 mt-1">
            Active clients in your system
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Active Projects</CardTitle>
          <FolderOpen className="h-4 w-4 text-purple-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">{stats.activeProjects}</div>
          <p className="text-xs text-gray-600 mt-1">
            Projects currently in progress
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Pending Invoices</CardTitle>
          <Receipt className="h-4 w-4 text-orange-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">{stats.pendingInvoices}</div>
          <p className="text-xs text-gray-600 mt-1">
            Awaiting payment
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</div>
          <p className="text-xs text-gray-600 mt-1">
            From paid invoices
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
