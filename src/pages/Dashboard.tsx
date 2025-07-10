
import { useClients } from "@/hooks/useClients";
import { useProjects } from "@/hooks/useProjects";
import { useInvoices } from "@/hooks/useInvoices";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentActivity from "@/components/dashboard/RecentActivity";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const Dashboard = () => {
  const { clients, loading: clientsLoading } = useClients();
  const { projects, loading: projectsLoading } = useProjects();
  const { invoices, loading: invoicesLoading } = useInvoices();

  const loading = clientsLoading || projectsLoading || invoicesLoading;

  if (loading) {
    return <LoadingSpinner size="lg" />;
  }

  // Real-time stats
  const stats = {
    totalClients: clients.length,
    activeProjects: projects.filter(p => p.status === "In Progress").length,
    pendingInvoices: invoices.filter(i => i.status === "Pending").length,
    totalRevenue: invoices.filter(i => i.status === "Paid").reduce((sum, inv) => sum + inv.amount, 0)
  };

  // Recent projects (latest 3)
  const recentProjects = projects
    .slice(0, 3)
    .map(project => ({
      id: project.id,
      name: project.name,
      client: project.clients?.name || "No client assigned",
      status: project.status || "Planning",
      progress: project.progress || 0
    }));

  // Pending invoices (latest 3)
  const pendingInvoices = invoices
    .filter(invoice => invoice.status !== "Paid")
    .slice(0, 3)
    .map(invoice => ({
      id: invoice.id,
      client: invoice.clients?.name || "No client",
      amount: invoice.amount,
      dueDate: invoice.due_date || "",
      overdue: invoice.due_date ? new Date(invoice.due_date) < new Date() : false
    }));

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back! 👋</h1>
        <p className="text-blue-100">Here's what's happening with your agency today.</p>
      </div>

      {/* Stats Grid */}
      <DashboardStats stats={stats} />

      {/* Recent Activity */}
      <RecentActivity 
        recentProjects={recentProjects} 
        pendingInvoices={pendingInvoices} 
      />
    </div>
  );
};

export default Dashboard;
