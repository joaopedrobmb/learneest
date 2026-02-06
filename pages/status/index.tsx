import React from "react";
import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();

  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <UpdatedAt />
      <DatabaseStatus />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Loading...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");

    return (
      <div>
        <h1>Status</h1>
        <p>Updated At: {updatedAtText}</p>
      </div>
    );
  }
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let databaseStatusInformation: React.ReactNode = "Loading...";

  if (!isLoading && data) {
    databaseStatusInformation = (
      <>
        <div>Version: {data.dependencies.database.version}</div>
        <div>
          Opened Connections: {data.dependencies.database.opened_connections}
        </div>
        <div>Max Connections: {data.dependencies.database.max_connections}</div>
      </>
    );
  }

  return (
    <div>
      <h1>Database Information</h1>
      <p>{databaseStatusInformation}</p>
    </div>
  );
}
