"use client";
import { useGetPostsQuery } from "../redux/services/api/apiSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Posts = () => {
  const headers = ["user Id", "Id", "Title", "Body"];

  const { data, error, isLoading } = useGetPostsQuery();
  console.log("data: ", data);

  return (
    <div className="container mx-auto">
      <Table>
        <TableHeader className="">
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item) => (
            <TableRow key={item?.id || 0}>
              <TableCell className="font-medium ">
                {item?.userId || 0}
              </TableCell>
              <TableCell className="font-medium">{item?.id || 0}</TableCell>
              <TableCell className="font-medium">{item?.title || ""}</TableCell>
              <TableCell>{item?.body || ""}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Posts;
