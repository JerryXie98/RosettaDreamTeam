export interface IRosettaConfig {
  Options: Options;
  Registrations: Registration[];
  Standardization: Standardization;
  Blocking: Blocking;
  DataStores: DataStore[];
  Matching: Matching;
  MidProvider: MidProvider;
  LidStorageProviders: LidStorageProvider[];
  Diagnostics: Diagnostics;
}

export interface Options {
  [key: string]: any;
}

export interface Registration {
  DataStore: string;
  LidDomainId: string;
  RecordReader: RecordReader;
  ResultWriter: ResultWriter;
}
  export interface RecordReader {
    Type: string;
    UseColumns: UseColumns;
    BatchSize: number;
    Options: RecordReaderOptions;
  }
    export interface UseColumns {
      [key: string]: any;
    }
    export interface RecordReaderOptions {
      Path: string;
    }
  export interface ResultWriter {
    Type: string;
    TargetColumnName: string;
    IncludeColumnTypes: string;
    Options: RecordWriterOptions;
  }
    export interface RecordWriterOptions {
      Path: string;
    }

export interface Standardization {
  SynonymDatabases: SynonymDatabases;
  FieldStandardizers: FieldStandardizer[];
}
  export interface SynonymDatabases {
    dbString: string;
  }
  export interface FieldStandardizer {
    Type: string;
    InputFields: InputField[];
    OutputField: string;
  }
    export interface InputField {
      FieldName: string;
      FieldStore: string;
    }

export interface Blocking {
  BlockingKeys: BlockingKey[];
}
  export interface BlockingKey {
    Name: string;
    Components: Component[];
    KeysCreatedByEncoding: number;
  }
  export interface Component {
    Field: Field;
    Encoding: string;
    Options: BlockingComponentOptions;
  }
    export interface Field {
      FieldName: string;
      FieldStore: string;
    }
    export interface BlockingComponentOptions {
      [key: string]: any;
    }

export interface DataStore {
  Id: string;
  Type: string;
  Options: DataStoreOptions;
}
  export interface DataStoreOptions {
    StorageProviderType: string;
  }

export interface Matching {
  RecordComparers: RecordComparer[];
}
  export interface RecordComparer {
    Name: string;
    DataStores: string[];
    FieldComparers: FieldComparer[];
  }
    export interface FieldComparer {
      Name: string;
      Field: MatchingRecordFields;
      DistanceFunction: DistanceFunction;
      Threshold: number;
    }
      export interface MatchingRecordFields {
        FieldName: string;
        FieldStore: string;
      }
      export interface DistanceFunction {
        Name: string;
        Options: DistanceFunctionOptions;
      }
        export interface DistanceFunctionOptions {
          [key: string]: any;
        }

export interface MidProvider {
  Type: string;
}

export interface LidStorageProvider {
  Id: string;
  LidDomainIds: string[];
  Type: string;
}

export interface Diagnostics {
  Type: string;
  Options: DiagnosticOptions;
}
  export interface DiagnosticOptions {
    BatchSize: number;
  }






