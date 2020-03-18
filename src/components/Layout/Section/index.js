import React from 'react';
import {
  Card, CardBody, CardHeader, CardTitle,
} from 'reactstrap';

export default function index({ children, title, className }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>
          {title}
        </CardTitle>
      </CardHeader>
      <CardBody>
        { children }
      </CardBody>
    </Card>
  );
}
