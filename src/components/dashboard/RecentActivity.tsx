
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FolderOpen, 
  Receipt, 
  Clock,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  client: string;
  status: string;
  progress: number;
}

interface Invoice {
  id: string;
  client: string;
  amount: number;
  dueDate: string;
  overdue: boolean;
}

interface RecentActivityProps {
  recentProjects: Project[];
  pendingInvoices: Invoice[];
}

const RecentActivity = ({ recentProjects, pendingInvoices }: RecentActivityProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Review": return "bg-orange-100 text-orange-800";
      case "Planning": return "bg-gray-100 text-gray-800";
      case "Completed": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recent Projects */}
      <Card className="border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-purple-600" />
            Recent Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentProjects.length > 0 ? (
            recentProjects.map((project) => (
              <div key={project.id} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{project.name}</h4>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{project.client}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Progress</span>
                    <span className="text-gray-700 font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <FolderOpen className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">No projects yet</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pending Invoices */}
      <Card className="border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="h-5 w-5 text-orange-600" />
            Pending Invoices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {pendingInvoices.length > 0 ? (
            pendingInvoices.map((invoice) => (
              <div key={invoice.id} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{invoice.client}</h4>
                  <div className="flex items-center gap-2">
                    {invoice.overdue ? (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    )}
                    <span className="font-semibold text-gray-900">
                      ${invoice.amount.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    Due: {invoice.dueDate ? new Date(invoice.dueDate).toLocaleDateString() : 'No due date'}
                  </span>
                  <Badge className={invoice.overdue ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}>
                    {invoice.overdue ? "Overdue" : "On Time"}
                  </Badge>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <Receipt className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">No pending invoices</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentActivity;
