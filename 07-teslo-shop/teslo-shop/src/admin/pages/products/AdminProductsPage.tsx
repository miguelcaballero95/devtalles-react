import {AdminTitle} from "@/admin/components/AdminTitle.tsx";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Link} from "react-router";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import {Button} from "@/components/ui/button.tsx";
import {PlusIcon} from "lucide-react";

export const AdminProductsPage = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle title="Products" subtitle="Manage your products"/>
        <Link to="/admin/products/new">
          <Button>
            <PlusIcon/>
            New Product
          </Button>
        </Link>
      </div>
      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">ID</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Sizes</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <img src="https://placehold.co/250x250" alt="Product" className="w-20 h-20 object-cover rounded-md"/>
            </TableCell>
            <TableCell>Product 1</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Category 1</TableCell>
            <TableCell>100 stock</TableCell>
            <TableCell>XS,S,L</TableCell>
            <TableCell className="text-right">
              <Link to={`/admin/products/t-shirt`}>Edit</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CustomPagination totalPages={10}/>
    </>
  )
}